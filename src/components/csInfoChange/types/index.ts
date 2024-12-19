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