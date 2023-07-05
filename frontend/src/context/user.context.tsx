import React, { useState, useCallback, createContext, useEffect } from 'react';
import { toast } from"react-toastify";
import { useNavigate } from 'react-router-dom';
import { 
  iUserComplete, iUserSimple, iLogin, iRegister, iCourses, iDocuments, iExperiences, iSkills
} from '../interfaces/users';
import api from '../utils/axios';
import { AxiosError } from 'axios';
import retrieveToken from '../utils/user/retrieveToken';

export const UserContext = createContext<{
  user: iUserComplete | undefined;
  setUser: React.Dispatch<React.SetStateAction<iUserComplete | undefined>>;
  skills: iSkills[] | undefined;
  setSkills: React.Dispatch<React.SetStateAction<iSkills[] | undefined>>;
  courses: iCourses[] | undefined;
  setCourses: React.Dispatch<React.SetStateAction<iCourses[] | undefined>>;
  experiences: iExperiences[] | undefined;
  setExperiences: React.Dispatch<React.SetStateAction<iExperiences[] | undefined>>;
  documents: iDocuments[] | undefined;
  setDocuments: React.Dispatch<React.SetStateAction<iDocuments[] | undefined>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  usersList: iUserSimple[];
  login: (data: iLogin) => void;
  logout: () => void;
  registerUser: (data: iRegister) => void;
  profile: () => Promise<void>;
  displayProfile: (id: string) => Promise<iUserSimple>;
  updateProfile: (data: iUserSimple) => void;
  deleteSelf: () => void;
  listUsersPage: (page: string | number, amount: string | number, city: string) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (token: string, password: string) => void;
  setUsersList: React.Dispatch<React.SetStateAction<iUserSimple[]>>;
}>({
  user: undefined,
  setUser: () => {},
  skills: undefined,
  setSkills: () => {},
  courses: undefined,
  setCourses: () => {},
  experiences: undefined,
  setExperiences: () => {},
  documents: undefined,
  setDocuments: () => {},
  token: '',
  setToken: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  usersList: [],
  setUsersList: () => {},
  login: () => {},
  logout: () => {},
  registerUser: () => {},
  profile: () => Promise.resolve(),
  displayProfile: () => new Promise(() => []),
  updateProfile: () => {},
  deleteSelf: () => {},
  listUsersPage: () => new Promise(() => []),
  forgotPassword: () => {},
  resetPassword: () => {},
});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<iUserComplete | undefined>(undefined);
  const [skills, setSkills] = useState<iSkills[] | undefined>(undefined);
  const [courses, setCourses] = useState<iCourses[] | undefined>(undefined);
  const [experiences, setExperiences] = useState<iExperiences[] | undefined>(undefined);
  const [documents, setDocuments] = useState<iDocuments[] | undefined>(undefined);
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usersList, setUsersList] = useState<iUserSimple[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken: string | null = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      api.defaults.headers.Authorization = `Bearer ${storedToken}`;
      profile();
    }
  }, []);

  const login = useCallback(async (data: iLogin) => {
    try {
      const response = await api.post('/login', data);
      const { token } = response.data;
      setToken(token);
      setIsAuthenticated(true);
      api.defaults.headers.Authorization = `Bearer ${token}`;

      if (!!data.remember) { 
        localStorage.setItem('@token', response.data.token) 
        sessionStorage.removeItem('@token')
    } else {
        sessionStorage.setItem('@token', response.data.token)
        localStorage.removeItem('@token')
    }
    
      toast.success('Login realizado com sucesso!');
      profile();
      navigate('/dashboard');
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  }, []);

  const logout = useCallback(() => {
    setToken('');
    setIsAuthenticated(false);
    api.defaults.headers.Authorization = '';
    localStorage.removeItem('token');
    toast.success('Logout realizado com sucesso! Volte sempre!');
    navigate('/login');
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    try {
      const response = await api.post('/login/forgot', { email });
      toast.success(response.data.message);
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  },[])

  const resetPassword = useCallback(async (token: string, password: string) => {
    try {
      const response = await api.post(`/login/reset/${token}`, { password});
      toast.success(response.data.message);
      navigate('/login');
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  },[])

  const registerUser = useCallback(async (data: iRegister) => {
    try {
      await api.post('/users', data);
      toast.success('Cadastro realizado com sucesso!');
      login({ email: data.email, password: data.password, remember: true });
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  }, []);

  const profile = useCallback(async () => {

    try {
      const retrievedToken: string = retrieveToken()

      const response = await api.get('/users', {
        headers: {
          'Authorization': `Bearer ${retrievedToken}`
        }
      });

      setUser(response.data);
      setSkills(response.data.skills);
      setCourses(response.data.courses);
      setExperiences(response.data.experiences);
      setDocuments(response.data.documents);
      setIsAuthenticated(true)

    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  }, []);

  const displayProfile = useCallback(async (id: string) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  }, []);

  const updateProfile = useCallback(async (data: iUserSimple) => {
    try {
      const response = await api.patch('/users', data);
      toast.success('Seu perfil foi atualizado!');
      setUser((prevUser) => prevUser ? { ...prevUser, ...response.data } : undefined);
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  }, []);

  const deleteSelf = useCallback(async () => {
    try {
      await api.delete('/users');
      toast.success('Sua conta foi deletada, sentiremos saudades!');
      localStorage.clear();
      navigate('/');
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  }, []);

  const listUsersPage = useCallback(async (page: number = 1, amount: number = 10, city: string) => {
    try {
      const query = city ? `?page=${page}&amount=${amount}&city=${city}` : `?page=${page}&amount=${amount}`;
      const response = await api.get(`/users/all${query}`);
      setUsersList(response.data.content);
    } catch (err: AxiosError | unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message as string);
      } else {
        toast.error('Erro do lado do cliente, tente novamente!');
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        skills,
        setSkills,
        courses,
        setCourses,
        experiences,
        setExperiences,
        documents,
        setDocuments,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        registerUser,
        profile,
        displayProfile,
        updateProfile,
        deleteSelf,
        listUsersPage,
        forgotPassword,
        resetPassword,
        usersList,
        setUsersList
      }}
    >
      {children}
    </UserContext.Provider>
  );
};