import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from './functions/send-email/resource';
import * as iam from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
  auth,
  data,
  sendEmail,
});

// ✅ Agregar permisos para SES
const sendEmailFunction = backend.sendEmail.resources.lambda;
sendEmailFunction.addToRolePolicy(
  new iam.PolicyStatement({
    actions: ['ses:SendEmail', 'ses:SendRawEmail'],
    resources: ['*'], // En producción, restringe esto a tu identidad SES
  })
);

console.log('✅ Backend configurado con permisos de SES');