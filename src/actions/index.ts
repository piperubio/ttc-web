import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  sendContactEmail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "El nombre es requerido"),
      email: z.string().email("Email inválido"),
      phone: z.string().min(1, "El teléfono es requerido"),
      message: z.string().min(1, "El mensaje es requerido"),
    }),
    handler: async (input) => {
      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // TODO: Implement actual email sending logic here.
      // You can use services like Resend, SendGrid, or Nodemailer.
      // Example with Resend:
      // await resend.emails.send({
      //   from: 'onboarding@resend.dev',
      //   to: 'contacto@ttcontadores.cl',
      //   subject: `Nuevo mensaje de ${input.name}`,
      //   html: `<p>Nombre: ${input.name}</p><p>Email: ${input.email}</p><p>Teléfono: ${input.phone}</p><p>Mensaje: ${input.message}</p>`
      // });

      console.log("Contact form submitted:", input);

      // For now, we just return success
      return {
        success: true,
        message: "Mensaje enviado correctamente",
      };
    },
  }),
};
