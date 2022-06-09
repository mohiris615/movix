import React from "react";
import { Wrapper, Link, Item, List } from "./wrapper.styled";

export const Header = () =>  {
    return (
        <Wrapper>
            <nav>
                <div>
                    <List>
                        <Item>
                            <Link href="/dashboard" >Dashboard</Link>
                        </Item>
                        <Item>
                            <Link href="/suggestion" >Suggestion</Link>
                        </Item>
                        <Item>
                            <Link href="/add" >Add</Link>
                        </Item>
                        <Item>
                            <Link href="/logout" >Logout</Link>
                        </Item>
                    </List>
                </div>
            </nav>
        </Wrapper>
    )
}