import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
  render() {
    //Returns the emotions as an HTML table
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              (() => {
                const rows = [];
                for (let emotion in this.props.emotions) {
                  rows.push(<tr>
                      <td>{emotion}</td>   <td>{this.props.emotions[emotion]}</td>
                    </tr>)
                }
                return rows;
              })()
            }
          </tbody>
        </table>
      </div>
    );
  }

}
export default EmotionTable;