import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { FakeUsersRepository } from '../../repositories/fakes/FakeUsersRepository'
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const fakeUsersRepository = new FakeUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  fakeUsersRepository,
  mailtrapMailProvider
)

const createUserController =  new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }