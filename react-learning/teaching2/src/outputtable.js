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
        <TableHeaderColumn> % Malignant </TableHeaderColumn>
        <TableHeaderColumn> % NonMalignant </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn> Sameer </TableRowColumn>
        <TableRowColumn> 12/11/2017 </TableRowColumn>
        <TableRowColumn> 0.60 </TableRowColumn>
        <TableRowColumn> 0.40 </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)
    }
}

export default OutTable