import * as React from "react";
import {
  createContext,
  ElementRef,
  forwardRef,
  PropsWithChildren,
  useMemo,
} from "react";
import * as Styled from "./Filterbar.styles";
import {
  FilterBarProps,
  FilterCategoryFormLabel,
  FilterProps,
  GroupLabelProps,
  SortingProps,
} from "../FilterBar.types";
import { Modal } from "../../Modal/Modal";
import { useCloseOnResize } from "../hooks/useCloseOnResize";
import { getBreakpointAsNumber } from "../../../theme/mappings/mediaBreakpoints";
import { Divider } from "../../Divider";
import { Accordion } from "../../Accordion";
import { VisuallyHidden } from "react-aria";

export const GroupLabelContext = createContext<GroupLabelProps>(
  {} as GroupLabelProps,
);

export const MobileFilterBar = forwardRef<
  ElementRef<typeof Styled.Root>,
  FilterBarProps
>(({ filters, sorting, stickyOnMobile, onOpenChange, ...rest }, ref) => {
  return (
    <Styled.Root $sticky={stickyOnMobile} ref={ref} {...rest}>
      <Filters filters={filters} onOpenChange={onOpenChange} />
      <Styled.DividerContainer>
        <Divider color="black" orientation="vertical" noGap />
      </Styled.DividerContainer>
      <Sorting sorting={sorting} onOpenChange={onOpenChange} />
    </Styled.Root>
  );
});
MobileFilterBar.displayName = "FilterBar.MobileFilterBar";

const shouldClose = (clientWidth: number) =>
  clientWidth >= getBreakpointAsNumber("md");

export const Sorting = ({ sorting, onOpenChange }: SortingProps) => {
  const [open, setOpen] = useCloseOnResize(false, shouldClose);
  return (
    <Modal.Root
      open={open}
      onOpenChange={(open) => {
        onOpenChange?.(open);
        setOpen(open);
      }}
    >
      <Modal.Trigger>
        <Styled.SortingButton>
          Sortierung
          <Styled.TriggerIcon />
        </Styled.SortingButton>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>Sortierung</Modal.Title>
        <Modal.Description paddingBottom={false}>
          <VisuallyHidden>
            <legend id={`filter-sort`}>Sortierung</legend>
          </VisuallyHidden>
          <Styled.Fieldset aria-labelledby={`filter-sort`}>
            {sorting.form}
          </Styled.Fieldset>
        </Modal.Description>
        <Styled.PaddingWrapper>
          <Styled.ApplyButton
            fullWidth
            onClick={() => {
              setOpen(false);
            }}
          >
            Übernehmen
          </Styled.ApplyButton>
        </Styled.PaddingWrapper>
      </Modal.Content>
    </Modal.Root>
  );
};

export const Filters = ({ filters, onOpenChange }: FilterProps) => {
  const [open, setOpen] = useCloseOnResize(false, shouldClose);

  const firstEditableFilter = filters.find(
    (filter) => filter.isEditable !== false,
  );
  const defaultValue = firstEditableFilter ? [firstEditableFilter.label] : [];

  return (
    <Modal.Root
      open={open}
      onOpenChange={(open) => {
        onOpenChange?.(open);
        setOpen(open);
      }}
    >
      <Modal.Trigger>
        <Styled.FilterButton>
          Filter
          <Styled.TriggerIcon />
        </Styled.FilterButton>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>Filter</Modal.Title>
        <Modal.Description paddingBottom={false}>
          <Accordion.Root
            type="multiple"
            size="large"
            defaultValue={defaultValue}
          >
            {filters.map(
              ({ label, selectedLabel, isEditable = true, form }) => {
                return (
                  <React.Fragment key={label}>
                    {isEditable && (
                      <MobileFilterItem
                        label={label}
                        selectedLabel={selectedLabel}
                      >
                        {form}
                      </MobileFilterItem>
                    )}
                  </React.Fragment>
                );
              },
            )}
          </Accordion.Root>
        </Modal.Description>
        <Styled.PaddingWrapper>
          <Styled.ApplyButton
            fullWidth
            onClick={() => {
              setOpen(false);
            }}
          >
            Übernehmen
          </Styled.ApplyButton>
        </Styled.PaddingWrapper>
      </Modal.Content>
    </Modal.Root>
  );
};

export const MobileFilterItem = ({
  children,
  label,
  selectedLabel,
}: PropsWithChildren<FilterCategoryFormLabel>) => {
  const groupLabelProps = useMemo(() => {
    return { id: `filter-${label}`, label: label };
  }, [label]);

  return (
    <Accordion.Item value={label}>
      <Accordion.Header info={selectedLabel}>{label}</Accordion.Header>
      <Accordion.Content isIndented additionalTopPadding>
        <GroupLabelContext.Provider value={groupLabelProps}>
          {children}
        </GroupLabelContext.Provider>
      </Accordion.Content>
    </Accordion.Item>
  );
};
