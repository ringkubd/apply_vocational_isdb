export default function handler(req, res){
    res.status(200).json([{
        address: {
            flat: 'IDB Bhaban (4th Floor)',
            location: 'E/8-A, Rokeya Sharani, Sher-e-Bangla Nagar. Dhaka-1207, Bangladesh',
            phone: '+880 2 9183006',
            email: 'idbb@isdb-bisew.org',
            fax: '+880 2 9183001 - 2'
        }
    }, {
        programme: [
            {
                text: 'IT Scholarship Programme',
                link: "https://isdb-bisew.org/it-scholarship-programme"
            },
            {
                text: 'Vocational Training',
                link: "https://isdb-bisew.org/vocational-training-programme"
            },
            {
                text: 'Madrasah Programme',
                link: "https://isdb-bisew.org/vocational-training-programme"
            },
            {
                text: '4-Year Diploma Programme',
                link: "https://isdb-bisew.org/vocational-training-programme"
            },
            {
                text: 'Orphanage Programme',
                link: "https://isdb-bisew.org/vocational-training-programme"
            },
            {
                text: 'Necessary Forms',
                link: "https://isdb-bisew.org/vocational-training-programme"
            }

        ]
    },
        {
            other_links: [
                {
                    text: 'Project Information System for VTP',
                    link: "https://pis.isdb-bisew.org/login"
                },
                {
                    text: 'Project Information System for ITP',
                    link: "https://idb-bisew.info/"
                },
                {
                    text: 'CareerHub IsDB-BISEW',
                    link: "https://careerhub.idb-bisew.info/"
                },
                {
                    text: 'TSPs Monitoring System',
                    link: "https://tms.idb-bisew.info/"
                },
                {
                    text: 'IsDB-BISEW Tenant',
                    link: "https://tenant.isdb-bisew.org/"
                },
                {
                    text: 'Contact us',
                    link: "https://isdb-bisew.org/contact"
                },
            ]
        },
        {
            social: {
                facebook: 'https://fb.com/IsDBBISEWSCHOLARSHIP'
            }
        }
    ])
}