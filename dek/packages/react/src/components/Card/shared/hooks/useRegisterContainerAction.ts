import { useEffect } from "react";
import { useContainerPressContext } from "../contexts/ContainerPressContext";

interface UseRegisterContainerActionProps {
  action?: () => void;
  isEnabled: boolean;
}

export const useRegisterContainerAction = ({
  action,
  isEnabled,
}: UseRegisterContainerActionProps): void => {
  const { registerAction, registerTrigger } = useContainerPressContext();

  useEffect(() => {
    if (!isEnabled || !action) {
      registerTrigger(false);
      return;
    }
    registerTrigger(true);
    registerAction(action);
  }, [isEnabled, action, registerAction, registerTrigger]);
};
