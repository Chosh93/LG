import { useForm } from "@mantine/form";

export const useRNAuthForm = () => {
    const form = useForm({
        initialValues: {
            name: '',
            residentNumber: '',
            registrationDate: '',
            dateOfBirth: '',
            dateOfRegistration: ''
        }
    });
    
    return {
        form,
    }
}