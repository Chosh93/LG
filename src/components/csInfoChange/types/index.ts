export interface CsInfoChangeProps {
  stepper: number;
  prev: () => void;
  next: () => void;
  infoBox: CsInfoBoxProps;
}

export interface CsInfoChangeFormProps {
  form: any;
}

export interface CsInfoBoxProps {
  planName: string;
  serviceName: string;
}

export interface CsInfoForm {
  userName: string;
  userZipCode: string;
  userAddress1: string;
  userAddress2: string;
  userPhoneType: string;
  userPhone: string;
  userEmail1: string;
  userEmail2: string;
}