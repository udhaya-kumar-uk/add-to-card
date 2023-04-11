
import '../App.css';

export default function Showcard(props){
    const{data={},onChange=(item)=>{ },disable=false}=props


return(
    <div className="col mb-5">
    <div className="card h-100">
    
        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
    
       <img src={data.image}  alt="..." />
    
        <div className="card-body p-4">
            <div className="text-center">
    
                <h5 className="fw-bolder"> {data.item}</h5>
        
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
    
                <span className="text-muted text-decoration-line-through">${data.price}</span>
                ${data.offer}
            </div>
        </div>
    
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a  
             disable={disable}
            onClick={()=>onChange(data)} 
            class={`btn ${disable ?"btn-secondary":"btn-primary"} mt-auto`} href="#">{disable?"added" :`${data.button}` }</a></div>
        </div>
    </div>
    </div>
)
}