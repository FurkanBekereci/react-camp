import React from 'react'
import { Menu, Dropdown , Image } from 'semantic-ui-react';

export default function SignedIn({signOut}) {


    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQGFs5Z9GjflDA/profile-displayphoto-shrink_800_800/0/1517029479704?e=1631145600&v=beta&t=jO0C32qN5YCPXhSmiuclaualq3NjZnP7AtUL4oqi2Pw"/>
                <Dropdown pointing="top left" text="Furkan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={() => signOut("Çıkış yaptık")} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>    
            </Menu.Item>    
        </div>
    )
}
