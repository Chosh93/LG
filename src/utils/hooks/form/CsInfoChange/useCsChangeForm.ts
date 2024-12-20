import { CsInfoForm } from "@/components/CsInfoChange/types";
import { useForm } from "@mantine/form";

export const useCsChangeForm = () => {
    const form = useForm({
          initialValues: {
              userName: '',
              userZipCode: '',
              userAddress1: '',
              userAddress2: '',
              userPhoneType: '',
              userPhone: '',
              userEmail1: '',
              userEmail2: '',
          } as CsInfoForm,
      });
    
    return {
        form,
    }
}