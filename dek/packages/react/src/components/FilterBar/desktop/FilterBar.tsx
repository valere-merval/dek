import React, {
  createContext,
  ElementRef,
  forwardRef,
  PropsWithChildren,
  useMemo,
} from "react";
import {
  FilterBarProps,
  FilterCategoryFormLabel,
  GroupLabelProps,
} from "../FilterBar.types";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import * as Styled from "./FilterBar.styles";
import { Text } from "../../Typography/Text";
import { DialogTrigger, Button } from "react-aria-components";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { useCloseOnResize } from "../hooks/useCloseOnResize";
import { getBreakpointAsNumber } from "../../../theme/mappings/mediaBreakpoints";

export const GroupLabelContext = createContext<GroupLabelProps>(
  {} as GroupLabelProps,
);

export const DesktopFilterBar = forwardRef<
  ElementRef<typeof Styled.Root>,
  FilterBarProps
>(({ filters, sorting, stickyOnMobile: _, onOpenChange, ...rest }, ref) => {
  return (
    <Styled.Root ref={ref} {...rest}>
      {filters.map((filter) => (
        <React.Fragment key={filter.label}>
          <DesktopFilterItem
            label={filter.label}
            selectedLabel={filter.selectedLabel}
            isEditable={filter.isEditable}
            onOpenChange={onOpenChange}
          >
            {filter.form}
          </DesktopFilterItem>
        </React.Fragment>
      ))}
      <DesktopFilterItem
        selectedLabel={sorting.selectedLabel}
        label={sorting.label}
        isEditable={sorting.isEditable}
        onOpenChange={onOpenChange}
      >
        {sorting.form}
      </DesktopFilterItem>
    </Styled.Root>
  );
});
DesktopFilterBar.displayName = "FilterBar.DesktopFilterBar";

const shouldClose = (clientWidth: number) =>
  clientWidth < getBreakpointAsNumber("md");

export const DesktopFilterItem = ({
  children,
  label,
  selectedLabel,
  isEditable = true,
  onOpenChange,
}: PropsWithChildren<FilterCategoryFormLabel>) => {
  const [open, setOpen] = useCloseOnResize(false, shouldClose);

  const groupLabelProps = useMemo(() => {
    return { id: `filter-${label}`, label: label };
  }, [label]);

  return (
    <ThemeProvider backgroundColor="darkGrey">
      {isEditable ? (
        <DialogTrigger>
          <Styled.ItemContainer
            $isEditable={isEditable}
            as={Button}
            onPress={() => {
              setOpen(true);
            }}
          >
            <div data-testid="filter-item-label">
              <Text size="small" variant="light" as="div">
                {label}
              </Text>
              <Text size="large" variant="light" as="div">
                {selectedLabel}
              </Text>
            </div>
            <Styled.TriggerChevron $isOpen={open} />
          </Styled.ItemContainer>

          <Styled.Popover
            isOpen={open}
            onOpenChange={(open) => {
              onOpenChange?.(open);
              setOpen(open);
            }}
          >
            <Styled.Dialog>
              <ThemeProvider backgroundColor="white">
                <GroupLabelContext.Provider value={groupLabelProps}>
                  {children}
                </GroupLabelContext.Provider>
                <ButtonPrimary
                  fullWidth={true}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Übernehmen
                </ButtonPrimary>
              </ThemeProvider>
            </Styled.Dialog>
          </Styled.Popover>
        </DialogTrigger>
      ) : (
        <Styled.ItemContainer $isEditable={isEditable}>
          <div data-testid="filter-item-label">
            <Text size="small" variant="light">
              {label}
            </Text>
            <Text size="large" variant="light">
              {selectedLabel}
            </Text>
          </div>
        </Styled.ItemContainer>
      )}
    </ThemeProvider>
  );
};
