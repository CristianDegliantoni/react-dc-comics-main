import comics from "./comics";
import AppFumetti from "./AppFumetti";

function AppMain() {
    return (
        <main className="app-main">
            <div className="comics-container">
                {comics.map((comic) => (
                    <AppFumetti key={comic.id} item={comic} />
                ))}
            </div>
        </main>
    );
}

export default AppMain;
