interface Props {
  spaceCount: number;
}

export const EmptySpace = ({ spaceCount }: Props) => (
  <>
    {Array.from({ length: spaceCount }, (_, index) => (
      <br key={index} />
    ))}
  </>
);
