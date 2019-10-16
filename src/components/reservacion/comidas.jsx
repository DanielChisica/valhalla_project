import React, { Component } from 'react';

class comidas extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      imagen : '',
      price : '',
      description: '',
      _id: '',
      tasks: [],
      destinos : []
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }


  guardarTask(id) {
       this.setState({destinos: this.state.destinos.concat(id)},()=>{console.log(this.state.destinos)  
        window.M.toast({html: 'el destino ha sido guardado'});})     
  }



  editTask(id) {
    fetch(`/api/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          title: data.title,
          description: data.description,
          _id: data._id
        });
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    // var pais ="suecia"
    // fetch(`http://localhost:8080/api/autos`)
    // fetch(`http://localhost:8080/api/tasks/${"Islandia"}`)
     fetch(`http://localhost:8080/api/comidas`)
      .then(res => res.json())
      .then(data => {
        this.setState({tasks: data});
        // console.log(this.state.tasks);
      });
  }



  render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="grey lighten-4">
          <div className="container">
           
            <div className="nav-wrapper">
            hola mundo
            
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s8">
              <table>
                <thead>
                  <tr>
                    <th>imagen</th>
                    <th>descripcion</th>
                    <th>precio</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.tasks.map(task => {
                      return (
                        <tr key={task._id}>
                          <td>{<img src={task.imagen} alt="Smiley face"  width="200"></img>}</td>
                          <td>{task.title}</td>
                          <td>{task.price}</td>
                          <td>
                            <button onClick={() => this.guardarTask(task._id)} className="btn grey darken-4">
                              <i className="material-icons">save</i> 
                            </button>
                            {/* <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="material-icons">edit</i>
                            </button> */}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default comidas;
