  declare global {
    namespace Express {
      export interface Request {
        users: object;
        user:  { id: string };
      }
    }
  }
  
  export default global;
  