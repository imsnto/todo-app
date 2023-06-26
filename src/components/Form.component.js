const Form = () => {
    return (  
        <form>
              <div className="form-group card" style={{width: '18rem'}}>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Write your notes"/>
            </div>
        </form>
    );
}
 
export default Form;