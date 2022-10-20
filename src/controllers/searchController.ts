import { Request, Response } from 'express'

import { Pet } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string

    // lógica para ao teclar ENTER na busca, volta a página inicial...
    if(!query) {
        res.redirect('/')
        return
    }

    let list = Pet.getFromName(query)

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })

}