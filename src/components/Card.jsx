
export default function Card(props) {
    return (
        <div className="card">
            <img src= {props.imageUrl} alt={props.imageUrl} />
            <div className="card__info">
                <div className="card__location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}target="_blank" rel="noopener noreferrer">View in GOOGLE MAPS</a>
                </div>
                <h1>{props.title}</h1>
                <p className="card__date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}.</p>  
            </div>
        </div>
    );
}