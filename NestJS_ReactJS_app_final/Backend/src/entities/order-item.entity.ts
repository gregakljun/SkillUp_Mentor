import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

import { Base } from './base.entity';

@Entity()
export class OrderItem extends Base {
    @Column()
    product_title: string

    @Column()
    price: number

    @Column()
    quantity: number

    @ManyToOne(() => Order, (order) => order.order_items)
    @JoinColumn({ name: 'order_id' })
    order: Order
}