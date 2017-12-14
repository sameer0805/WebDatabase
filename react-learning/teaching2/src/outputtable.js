import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class OutTable extends Component{
    constructor(props){
        super(props)
    }

    render() {
    return(
    <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn> Name </TableHeaderColumn>
        <TableHeaderColumn> Date </TableHeaderColumn>
        <TableHeaderColumn> Probability Malignant </TableHeaderColumn>
        <TableHeaderColumn> Probability NonMalignant </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn> {this.props.name} </TableRowColumn>
        <TableRowColumn> {this.props.date} </TableRowColumn>
        <TableRowColumn> {this.props.predictionM} </TableRowColumn>
        <TableRowColumn> {this.props.predictionNM} </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)
    }
}

export default OutTable