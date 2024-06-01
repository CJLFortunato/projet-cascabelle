/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { VercelPoolClient, db } from '@vercel/postgres';

import {
  types,
  genres,
  roles,
  eventTypes,
  supports,
  subscriptions,
  documents,
} from './seedData';

async function seedTypeTable(client: VercelPoolClient) {
  try {
    const insertedTypes = await Promise.all(
      types.map(
        (type) => client.sql`
        INSERT INTO type (label)
        VALUES (${type.label})
      `,
      ),
    );

    console.log(`Seeded ${insertedTypes.length} Types`);

    return {
      types: insertedTypes,
    };
  } catch (error) {
    console.error('Error seeding type:', error);
    throw error;
  }
}

async function seedGenreTable(client: VercelPoolClient) {
  try {
    const insertedGenres = await Promise.all(
      genres.map(
        (genre) => client.sql`
        INSERT INTO genre (label)
        VALUES (${genre.label})
      `,
      ),
    );

    console.log(`Seeded ${insertedGenres.length} genres`);

    return {
      genres: insertedGenres,
    };
  } catch (error) {
    console.error('Error seeding genre:', error);
    throw error;
  }
}

async function seedSupportTable(client: VercelPoolClient) {
  try {
    const insertedSupports = await Promise.all(
      supports.map(
        (support) => client.sql`
        INSERT INTO support (label)
        VALUES (${support.label})
      `,
      ),
    );

    console.log(`Seeded ${insertedSupports.length} supports`);

    return {
      supports: insertedSupports,
    };
  } catch (error) {
    console.error('Error seeding support:', error);
    throw error;
  }
}

async function seedRoleTable(client: VercelPoolClient) {
  try {
    const insertedRoles = await Promise.all(
      roles.map(
        (role) => client.sql`
        INSERT INTO role (label)
        VALUES (${role.label})
      `,
      ),
    );

    console.log(`Seeded ${insertedRoles.length} Types`);

    return {
      roles: insertedRoles,
    };
  } catch (error) {
    console.error('Error seeding role:', error);
    throw error;
  }
}

async function seedSubscriptionTable(client: VercelPoolClient) {
  try {
    const insertedSubscriptions = await Promise.all(
      subscriptions.map(
        (subscription) => client.sql`
        INSERT INTO subscription (name, monthly_price, annual_price)
        VALUES (${subscription.name},${subscription.monthly_price},${subscription.annual_price})
      `,
      ),
    );

    console.log(`Seeded ${insertedSubscriptions.length} subscriptions`);

    return {
      subscriptions: insertedSubscriptions,
    };
  } catch (error) {
    console.error('Error seeding subscription:', error);
    throw error;
  }
}

async function seedEventTypeTable(client: VercelPoolClient) {
  try {
    const insertedEventTypes = await Promise.all(
      eventTypes.map(
        (eventType) => client.sql`
        INSERT INTO event_type (label)
        VALUES (${eventType.label})
      `,
      ),
    );

    console.log(`Seeded ${insertedEventTypes.length} Types`);

    return {
      eventTypes: insertedEventTypes,
    };
  } catch (error) {
    console.error('Error seeding eventType:', error);
    throw error;
  }
}

async function seedDocumentTable(client: VercelPoolClient) {
  try {
    const insertedDocuments = await Promise.all(
      documents.map(
        (document) => client.sql`
        INSERT INTO document (
          title,
          author,
          performer,
          actors,
          director,
          publisher,
          publication,
          publishing_date,
          isxn,
          blurb,
          cover,
          country,
          notes,
          rating,
          subtitles,
          audiodescription,
          fk_id_support,
          fk_id_type
        )
        VALUES (
          ${document.title},
          ${document.author},
          ${document.performer},
          ${document.actors},
          ${document.director},
          ${document.publisher},
          ${document.publication},
          ${document.publishing_date},
          ${document.isxn},
          ${document.blurb},
          ${document.cover},
          ${document.country},
          ${document.notes},
          ${document.rating},
          ${document.subtitles},
          ${document.audiodescription},
          ${document.supportId},
          ${document.typeId}
        )
      `,
      ),
    );

    console.log(`Seeded ${insertedDocuments.length} Types`);

    return {
      documents: insertedDocuments,
    };
  } catch (error) {
    console.error('Error seeding document:', error);
    throw error;
  }
}

async function main() {
  try {
    const client = await db.connect();

    // await seedTypeTable(client);
    // await seedGenreTable(client);
    // await seedRoleTable(client);
    // await seedSupportTable(client);
    // await seedSubscriptionTable(client);
    // await seedEventTypeTable(client);
    await seedDocumentTable(client);
  } catch (error) {
    console.error(
      'An error occurred while attempting to seed the database:',
      error,
    );
  }
}

export default main;
