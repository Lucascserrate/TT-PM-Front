'use client'
import { Provider as ReduxProvider } from "react-redux";
import { store } from '@/redux/store';

const Providers = ({ children }: { children: React.ReactNode }) => {
   return (
      <ReduxProvider store={store}>
         {children}
      </ReduxProvider>
   )
}

export default Providers
