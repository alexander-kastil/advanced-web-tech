import { VoucherDetail } from './voucher-details.model';

export class BalanceAccount {
    ID: number;
    Name: string;
    Expense: boolean;
    VoucherDetails: VoucherDetail[];
}
