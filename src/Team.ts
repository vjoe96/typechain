type Team = "yellow" | "red" | "green";
type Health = 0 | 5 | 10;
interface Play {
    nickname: string;
    team: Team;
    health: Health;
}
const jm: Play = {
    nickname: "nico",
    team: "yellow",
    health: 10
};
