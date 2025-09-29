import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-form">
        <form>
          <label>First Name:</label>
          <input type="text" name="firstName" required placeholder="Enter your first name" />
          <label>Last Name:</label>
          <input type="text" name="lastName" required placeholder="Enter your last name" />
          <label>Phone Number:</label>
          <input type="tel" name="phone" required placeholder="Enter your phone number" />
          <label>Email:</label>
          <input type="email" name="email" required placeholder="Enter your email" />
          <label>Message:</label>
          <textarea name="message" required placeholder="Enter your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
