import { CreateCustomerUseCase, FindOneCustomerUseCase, UpdateCustomerUseCase } from '@/usecase/customer';
import {
    InputCreateCustomerDto,
    InputFindOneCustomerDto,
    InputUpdateCustomerDto,
    OutputCustomerDto,
} from '@/usecase/customer/@shared/contracts/customer.dto';
import { CustomerControllerInterface } from '../@shared/contracts';
import { HttpResponse, create, ok } from '../@shared/helpers';

export class CustomerController implements CustomerControllerInterface {
    constructor(
        private readonly createCustomerUseCase: CreateCustomerUseCase,
        private readonly updateCustomerUseCase: UpdateCustomerUseCase,
        private readonly findOneCustomerUseCase: FindOneCustomerUseCase
    ) {}

    async create(input: InputCreateCustomerDto): Promise<HttpResponse<OutputCustomerDto>> {
        try {
            const output = await this.createCustomerUseCase.execute(input);
            return create(output);
        } catch (e) {
            throw e;
        }
    }

    async update(id: string, input: InputUpdateCustomerDto): Promise<HttpResponse<OutputCustomerDto>> {
        try {
            const output = await this.updateCustomerUseCase.execute(id, input);
            return ok(output);
        } catch (e) {
            throw e;
        }
    }

    async findOne(input: InputFindOneCustomerDto): Promise<HttpResponse<OutputCustomerDto>> {
        try {
            const output = await this.findOneCustomerUseCase.execute(input);
            return ok(output);
        } catch (e) {
            throw e;
        }
    }
}
