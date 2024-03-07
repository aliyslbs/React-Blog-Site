import React, { useEffect, useState } from 'react'
import AuthorService from '../services/authorService'
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'


export default function AuthorList() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        let authorService = new AuthorService()
        authorService.getAllAuthor().then(result => setAuthors(result.data))
    }, [])
    return (
        <div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Authors</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        authors.map(author => (
                            <TableRow key={author.authorId}>
                                <TableCell>{author.authorName}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
