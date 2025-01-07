import CreateUpdateRoleForm from 'components/role/CreateUpdateRoleForm/CreateUpdateRoleForm'
import DashboardLayout from 'components/ui/DashboardLayout'
import { FC } from 'react'

const DashboardsRolesAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className='mb-4 text-center'>Create new role</h1>
      <CreateUpdateRoleForm />
    </DashboardLayout>
  )
}

export default DashboardsRolesAdd