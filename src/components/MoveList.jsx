import { userService } from '../services/userService';

export function MoveList({location}) {
    const user = userService.getUser();
    var movesToShow;
    if (location === 'home') {
        movesToShow = user.moves.slice(0, 3);
    }
    else {
        movesToShow = user.moves.filter(move => move.toUser._id === location)
    }

    return (
        <div className={`move-list-section ${location!=='home'? 'small' : ''}`}>
            {(movesToShow.length > 0) && <ul>
                <h3>Your Last {movesToShow.length} Moves:</h3>
                {movesToShow.map(move => {
                    return <li key={move._id}>
                        <div>To: {move.toUser.name}</div>
                        <div>At: {new Date(move.doneAt).toDateString()}</div>
                        <div>Amount: {move.amount} coins</div>
                    </li>
                }
                )}
            </ul>}
            {(movesToShow.length === 0) && <div className="no-moves-msg">You haven't made any moves yet.</div>}
        </div>
    )
}