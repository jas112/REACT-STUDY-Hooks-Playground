import { useState } from "react";

// function useFormState(initValue) {

//     const [formValue, setFormValue] = useState(initValue);

//     const handleChange = (evt) => {
//         setFormValue(evt.target.value)
//     };

//     const resetValue = () => {
//         setFormValue('');
//     };  

//     return [formValue, handleChange, resetValue];
// }

// export default useFormState;


export default initValue => {

    const [formValue, setFormValue] = useState(initValue);

    const handleChange = (evt) => {
        setFormValue(evt.target.value)
    };

    const resetValue = () => {
        setFormValue('');
    };

    return [formValue, handleChange, resetValue];
}
