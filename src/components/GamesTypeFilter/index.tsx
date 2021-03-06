import * as S from "./styles";

type TypeOfGame = {
  type: string;
  color: string;
};

type GamesTypeFilterProps = {
  typeOfGames: TypeOfGame[];
  currentTypeOfGames: string[];
  handleClearGameType: (type: string) => void;
  handleChangeGameType: (type: string) => void;
};

export function GamesTypeFilter({
  typeOfGames,
  currentTypeOfGames,
  handleClearGameType,
  handleChangeGameType,
}: GamesTypeFilterProps) {
  if (typeOfGames.length === 0)
    return <S.EmptyMessage>No games</S.EmptyMessage>;

  return (
    <S.Container>
      <S.Title>Filters</S.Title>
      <S.TypeOfGames>
        {typeOfGames.map(({ type, color }) => {
          const isActive = currentTypeOfGames.includes(type);
          const handleClickGameType = isActive
            ? handleClearGameType.bind(null, type)
            : handleChangeGameType.bind(null, type);

          return (
            <S.TypeOfGameButton
              key={type}
              gameColor={color}
              isActive={isActive}
              onClick={handleClickGameType}
            >
              {type}
            </S.TypeOfGameButton>
          );
        })}
      </S.TypeOfGames>
    </S.Container>
  );
}
