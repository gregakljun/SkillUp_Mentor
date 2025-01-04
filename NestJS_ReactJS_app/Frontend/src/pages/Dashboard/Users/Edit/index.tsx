import CreateUpdateUserForm from 'components/user/CreateUpdateUserForm'
import DashboardLayout from 'components/ui/DashboardLayout'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const DashboardsUsersEdit: FC = () => {
  const location = useLocation()
  return (
    <DashboardLayout>
      <h1 className='mb-4 text-center'>Edit user</h1>
      <CreateUpdateUserForm defaultValues={location.state}/>
      <CreateUpdateUserForm />
    </DashboardLayout>
  )
}

export default DashboardsUsersEdit