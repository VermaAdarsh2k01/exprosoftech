import { defineField, defineType } from "sanity";

export default defineType({
    name: 'industries',
    title: 'Industries Page',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Page Title',
        type: 'string',
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      }),
      defineField({
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string'
      }),
      defineField({
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text'
      }),
      defineField({
        name: 'hero',
        title: 'Hero Section',
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Hero Title',
            type: 'string',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'description',
            title: 'Hero Description',
            type: 'text',
            validation: Rule => Rule.required()
          }),
          defineField({
            name: 'image',
            title: 'Hero Images',
            type: 'array',
            of: [{
              type: 'image',
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                })
              ]
            }],
            validation: Rule => Rule.required().min(1)
          }),
          defineField({
            name: 'buttons',
            title: 'Hero Buttons',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Button Label',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'link',
                  title: 'Button Link',
                  type: 'string',
                  validation: Rule => Rule.required()
                }),
                defineField({
                  name: 'isCalendly',
                  title: 'Is Calendly Link',
                  type: 'boolean',
                  initialValue: false
                })
              ]
            }]
          })
        ]
      }),
      defineField({
        name: 'industries',
        title: 'Industries Section',
        type: 'object',
        fields: [
          defineField({
            name: 'heading',
            title: 'Section Heading',
            type: 'object',
            fields: [
              defineField({
                name: 'tagline',
                title: 'Tagline',
                type: 'string'
              }),
              defineField({
                name: 'title',
                title: 'Title',
                type: 'string'
              }),
              defineField({
                name: 'description',
                title: 'Description',
                type: 'text'
              })
            ]
          }),
          defineField({
            name: 'industries',
            title: 'Industries',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string'
                }),
                defineField({
                  name: 'tagline',
                  title: 'Tagline',
                  type: 'string'
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'array',
                  of: [{ type: 'text' }],
                  description: 'Multiple paragraphs for the description. Each item will be a separate paragraph.'
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      // Manufacturing
                      { title: 'Industry/Manufacturing', value: 'FaIndustry' },
                      { title: 'Cogs/Machinery', value: 'FaCogs' },
                      { title: 'Tools', value: 'FaTools' },
                      { title: 'Hard Hat/Safety', value: 'FaHardHat' },
                      
                      // Healthcare & Life Sciences
                      { title: 'Hospital', value: 'FaHospital' },
                      { title: 'Doctor/Medical', value: 'FaUserMd' },
                      { title: 'Heartbeat/Health', value: 'FaHeartbeat' },
                      { title: 'Pills/Pharmacy', value: 'FaPills' },
                      { title: 'Microscope/Research', value: 'FaMicroscope' },
                      { title: 'Medical Kit', value: 'FaFirstAid' },
                      
                      // Real Estate
                      { title: 'Home/Residential', value: 'FaHome' },
                      { title: 'Building/Commercial', value: 'FaBuilding' },
                      { title: 'Key/Property', value: 'FaKey' },
                      { title: 'Map/Location', value: 'FaMapMarkedAlt' },
                      
                      // Education
                      { title: 'Graduation Cap', value: 'FaGraduationCap' },
                      { title: 'School', value: 'FaSchool' },
                      { title: 'Book/Learning', value: 'FaBook' },
                      { title: 'Chalkboard/Teaching', value: 'FaChalkboardTeacher' },
                      
                      // Non-profit
                      { title: 'Heart/Charity', value: 'FaHeart' },
                      { title: 'Helping Hands', value: 'FaHandsHelping' },
                      { title: 'Donate/Giving', value: 'FaDonate' },
                      { title: 'Community/People', value: 'FaUsers' },
                      
                      // E-Commerce
                      { title: 'Shopping Cart', value: 'FaShoppingCart' },
                      { title: 'Store/Retail', value: 'FaStore' },
                      { title: 'Shopping Bag', value: 'FaShoppingBag' },
                      { title: 'Credit Card/Payment', value: 'FaCreditCard' },
                      
                      // High Tech
                      { title: 'Laptop Code/Software', value: 'FaLaptopCode' },
                      { title: 'Microchip/Hardware', value: 'FaMicrochip' },
                      { title: 'Robot/AI', value: 'FaRobot' },
                      { title: 'Database/Data', value: 'FaDatabase' },
                      { title: 'Cloud/SaaS', value: 'FaCloud' },
                      { title: 'Server/Infrastructure', value: 'FaServer' }
                    ]
                  }
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image'
                })
              ]
            }]
          })
        ]
      })
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'slug.current'
      }
    }
})