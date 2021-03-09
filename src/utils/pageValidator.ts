interface Step {
  label: string;
  action: () => void;
  isDisabled: boolean;
}

const pageValidator = (step: Step): boolean => {
  let isValid = true;
  if (!(step.label && step.label.length)) {
    console.error('Missing required prop "label" inside a "Step" prop');
    isValid = false;
  }
  if (!(step.action && {}.toString.call(step.action) === "[object Function]")) {
    console.error('Missing required prop "action" inside a "Step" prop');
    isValid = false;
  }
  if (typeof step.isDisabled !== "boolean") {
    console.error('Missing required prop "isDisabled" inside a "Step" prop');
    isValid = false;
  }
  return isValid;
};

export default pageValidator;
