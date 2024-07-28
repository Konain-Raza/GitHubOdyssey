import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create((set)=>({
    data: [],
    username: "Konain-Raza",
    updateData: (newusername)=> set(()=>({
        username: newusername
    })),

}))

export default useStore;
