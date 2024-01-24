// import React, { createContext, useContext, ReactNode } from "react";

// interface DataContextProps {
//   experience: number;
//   name: string;
//   weight: number;
//   height: number;
//   health: number;
// }

// interface DataContextProviderProps {
//   value: DataContextProps;
//   children: ReactNode; // Dodaj deklarację dzieci jako ReactNode
// }

// const DataContext = createContext<DataContextProps | undefined>(undefined);

// export const DataContextProvider: React.FC<DataContextProviderProps> = ({
//   value,
//   children,
// }) => <DataContext.Provider value={value}>{children}</DataContext.Provider>;

// export const useDataContext = () => {
//   const context = useContext(DataContext);
//   if (!context) {
//     throw new Error("useDataContext must be used within a DataContextProvider");
//   }
//   return context;
// };
