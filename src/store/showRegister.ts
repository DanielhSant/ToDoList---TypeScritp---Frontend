import {create} from "zustand";

interface ShowState {
    show: boolean;
    showRegisterForm: () => void
}

const switchForm = create<ShowState>((set) => {
    let show = false;

    const showRegisterForm = () => {
        show = !show
       
        set({show})
    }
    return {
        show,
        showRegisterForm
    }
})

export default switchForm;
