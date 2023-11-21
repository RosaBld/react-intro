export function List () {
    return (
        <div className="list">
            <h2>Todos</h2>
            <div>
            <input type="checkbox" id="learnReact" name="learnReact"/>
            <label for="learnReact">Learn React</label>
            </div>

            <div>
            <input type="checkbox" id="beAwesome" name="beAwesome"/>
            <label for="beAwesome">Be awesome!</label>
            </div>

            <div>
            <input type="checkbox" id="stayZen" name="stayZen"/>
            <label for="stayZen">Stay Zen!</label>
            </div>
        </div>
    );
}