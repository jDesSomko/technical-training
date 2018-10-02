import random

from odoo import models


class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        result = super(IrHttp, self).session_info()
        result['motd'] = "Bafien is watching you" if random.random() > 0.5 else "Bafien is totally sane. Also, please work harder."

        return result
