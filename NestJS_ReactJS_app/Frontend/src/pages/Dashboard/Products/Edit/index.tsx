import DashboardLayout from 'components/ui/DashboardLayout'
import CreateUpdateProductForm from 'components/product/CreateUpdateProductForm/CreateUpdateProductForm'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const DashboardsProductsEdit: FC = () => {
  const location = useLocation()
  return <DashboardLayout>
    <h1 className='mb-4 text-center'>Edit product</h1>
    <CreateUpdateProductForm defaultValues={location.state}/>
  </DashboardLayout>
}

export default DashboardsProductsEdit