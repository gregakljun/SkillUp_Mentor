import CreateUpdateUserForm from 'components/user/CreateUpdateUserForm'
import DashboardLayout from 'components/ui/DashboardLayout'
import { FC } from 'react'

const DashboardsUsersAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className='mb-4 text-center'>Create new user</h1>
      <CreateUpdateUserForm />
    </DashboardLayout>
  )
}

export default DashboardsUsersAdd