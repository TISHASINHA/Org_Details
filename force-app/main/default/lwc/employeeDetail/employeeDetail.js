import { LightningElement , api} from 'lwc';

export default class EmployeeDetail extends LightningElement {
    @api empDetail = {empName:'Ray', empAddress:'TX'}
}