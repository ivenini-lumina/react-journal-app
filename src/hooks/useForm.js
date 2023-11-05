import { useEffect, useMemo } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {}, formValitions = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation] = useState( {} );

    useEffect(() => {
        createValidators();
    }, [ formState ]);  
    
    useEffect(() => {
        setFormState(initialForm);
    }, [ initialForm ]);

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null){
                return false;
            }
        }
        return true;
    }, [ formValidation ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys( formValitions ) ) {            
            const [ fn, errorMessage ] = formValitions[formField];
            const fieldValid = fn(formState[ formField ]);
            formCheckedValues[`${formField}Valid`] = fieldValid ? null : errorMessage;
        }
        setFormValidation( formCheckedValues );
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,        
        isFormValid,
    }
}