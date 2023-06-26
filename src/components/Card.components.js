import Item from "./Item.component";

const Card = () =>  (  
        <div className="card" style={{width: '18rem'}}>
            <ul className="list-group list-group-flush">
                <Item data='first Item' />
                <Item data='second Item' />
                <Item data='third Item' />
            </ul>
        </div>
    );

 
export default Card;