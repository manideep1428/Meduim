import zod from 'zod'

export const SignInCheck= zod.object({
    email : zod.string().email("Not a Valid Email"),
    password : zod.string().min(8,"Password Aleast 8 Letters")
});

export const SignUpCheck= zod.object({
    email : zod.string().email("Not a Valid Email"),
    name : zod.string().min(4,"Name Aleast 4 Letters"),
    password : zod.string().min(6,"Password Aleast 8 Letters")
});

export const BlogInputCheck = zod.object({
    title : zod.string().min(10,"Title Aleast 10 Letters"),
    content : zod.string().min(300,"Content Aleast 300 letters")
});