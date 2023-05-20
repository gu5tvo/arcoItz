import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { ModalContext } from "../context/modal.context";
import { CoursesContext } from "../context/courses.context";
import { DocumentsContext } from "../context/documents.context";
import { ExperienceContext } from "../context/experience.context";
import { AdminContext } from "../context/admin.context";

export const useUser = () => useContext(UserContext);
export const useModal = () => useContext(ModalContext);
export const useCourses = () => useContext(CoursesContext);
export const useDocuments = () => useContext(DocumentsContext);
export const useExperience = () => useContext(ExperienceContext);
export const useAdmin = () => useContext(AdminContext);