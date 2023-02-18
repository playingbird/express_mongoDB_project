import winston from 'winston'

import { Mailer } from './mail'

export class UserMail extends Mailer {
  public async signUp({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'signUp',
        message: {
          from: '"Sign Up" <no-replay@actdoit.com>',
          to: email,
          subject: 'Sign Up'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async signUpByOneTimePassword({
    email,
    password
  }: {
    email: string
    password: string
  }) {
    try {
      await this.mailer.send({
        template: 'signUpByOneTimePassword',
        message: {
          from: '"Sign Up" <no-replay@actdoit.com>',
          to: email,
          subject: 'Sign Up'
        },
        locals: {
          email,
          password
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async resetPassword({
    email,
    accessToken
  }: {
    email: string
    accessToken: string
  }) {
    try {
      await this.mailer.send({
        template: 'resetPassword',
        message: {
          from: '"Reset Password" <no-replay@actdoit.com>',
          to: email,
          subject: 'Reset Password'
        },
        locals: {
          accessToken
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async verification({
    email,
    accessToken
  }: {
    email: string
    accessToken: string
  }) {
    try {
      await this.mailer.send({
        template: 'verification',
        message: {
          from: '"Verification" <no-replay@actdoit.com>',
          to: email,
          subject: 'Verification'
        },
        locals: {
          accessToken
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyVerified({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyVerified',
        message: {
          from: '"Successfully verified" <no-replay@actdoit.com>',
          to: email,
          subject: 'Successfully verified'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyUpdatedProfile({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyUpdatedProfile',
        message: {
          from: '"Successfully updated profile" <no-replay@actdoit.com>',
          to: email,
          subject: 'Successfully updated profile'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyUpdatedEmail({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyUpdatedEmail',
        message: {
          from: '"Successfully updated email" <no-replay@actdoit.com>',
          to: email,
          subject: 'Successfully updated email'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyUpdatedPassword({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyUpdatedPassword',
        message: {
          from: '"Successfully updated password" <no-replay@actdoit.com>',
          to: email,
          subject: 'Successfully updated password'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }

  public async successfullyDeleted({ email }: { email: string }) {
    try {
      await this.mailer.send({
        template: 'successfullyDeleted',
        message: {
          from: '"Successfully deleted" <no-replay@actdoit.com>',
          to: email,
          subject: 'Successfully deleted'
        }
      })
    } catch (error) {
      winston.error(error)
    }
  }
}
