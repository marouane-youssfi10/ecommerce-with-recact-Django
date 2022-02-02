from django.contrib import admin
from .models import *



class OrderAdmin(admin.ModelAdmin):
    list_display = ['_id', 'user', 'paymentMethod', 'taxPrice', 'shippingPrice', 'totalPrice', 'isPaid', 'paidAt', 'isDelivered', 'deliveredAt', 'createdAt']

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['_id', 'product', 'order', 'name', 'qty', 'price']

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(OrderItem, OrderItemAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(ShippingAddress)
